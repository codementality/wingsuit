import { RenderTwig } from '@wingsuit-designsystem/pattern-react';
import React from 'react';
import 'atoms/hamburger';
import 'molecules/card';
import 'atoms/button';
import 'molecules/hero';
import 'atoms/image';
import 'organisms/header';
import 'organisms/footer';
import 'organisms/section-code';
import './images/docs_export.png';
import './images/docs_mdx.png';
import './images/colors_tailwind.svg';
import './images/colors_scss.svg';
import './images/component_avatar.png';
import './homepage.behavior';

export default {
  title: 'Pages/Homepage',
  parameters: {
    layout: 'fullscreen',
  },
};

const template = require('./homepage.twig');

export const Homepage = () => <RenderTwig data={template}></RenderTwig>;
