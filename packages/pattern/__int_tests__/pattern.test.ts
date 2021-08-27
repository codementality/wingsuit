import * as path from 'path';
import fs from 'fs';
import Pattern from '../src/Pattern';
import PatternVariant from '../src/PatternVariant';
import { storage } from '../src';

describe('Pattern parsing', () => {
  beforeEach(() => {
    storage.createDefinitions(
      JSON.parse(fs.readFileSync(path.join(__dirname, '_data/patterns.json'))).patterns
    );
  });
  test('Test recursive Render Info', async () => {
    const pattern: Pattern = storage.loadPattern('pr_root');
    const variant = pattern.getDefaultVariant();
    const renderInfo = variant.getRenderInfo();
    expect(renderInfo['items--0'].children['items--0'].fields.leaf_field).toEqual('correct');
    expect(renderInfo['items--0'].children['items--0'].fields.leaf_setting).toEqual('correct');
  });
  test.each([
    ['blank', 1, 0, 0],
    ['card', 2, 3, 2],
  ])(
    'pattern %p should have %p variants, %p fields and %p settings.',
    (pattern_id: string, variantsCount: number, fieldsCount: number, settingsCount: number) => {
      const pattern: Pattern = storage.loadPattern(pattern_id);
      expect(pattern.getLabel()).not.toBeNull();
      expect(pattern.getId()).not.toBeNull();
      expect(Object.keys(pattern.getPatternVariants()).length).toEqual(variantsCount);
      const defaultVariant: PatternVariant = pattern.getDefaultVariant();
      expect(defaultVariant.getLabel()).not.toBeNull();
      expect(settingsCount).toEqual(Object.keys(defaultVariant.getSettings()).length);
      expect(fieldsCount).toEqual(Object.keys(defaultVariant.getFields()).length);
    }
  );
});
