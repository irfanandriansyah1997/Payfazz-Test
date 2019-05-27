/**
 * Font Mixin Test
 * @author Irfan Andriansyah <irfanandriansyah10@gmail.com>
 * @since 2019.05.12
 */

import * as React from 'react';
import styled from 'styled-components';
import * as renderer from 'react-test-renderer';
import {
    fontFace,
    fontFamily,
    fontSize,
    fontWeight,
    fontStyle,
    fontStretch,
    lineHeight,
    letterSpacing,
    textAlign,
    fontColor
} from './font.mixin';
import 'jest-styled-components';

it('Test render font family mixin', () => {
    const Style = styled.button`
        ${fontFamily('avenir')}
    `;
    const component = renderer.create(<Style />).toJSON();

    expect(component).toHaveStyleRule('font-family', 'avenir');
});

it('Test render font size mixin', () => {
    const Style = styled.button`
        ${fontSize('14px')}
    `;
    const component = renderer.create(<Style />).toJSON();

    expect(component).toHaveStyleRule('font-size', '14px');
});

it('Test render font weight mixin', () => {
    const Style = styled.button`
        ${fontWeight('bold')}
    `;
    const component = renderer.create(<Style />).toJSON();

    expect(component).toHaveStyleRule('font-weight', 'bold');
});

it('Test render font weight mixin with null parameter', () => {
    const Style = styled.button`
        ${fontWeight()}
    `;
    const component = renderer.create(<Style />).toJSON();

    expect(component).toHaveStyleRule('font-weight', '400');
});

it('Test render font style mixin', () => {
    const Style = styled.button`
        ${fontStyle('italic')}
    `;
    const component = renderer.create(<Style />).toJSON();

    expect(component).toHaveStyleRule('font-style', 'italic');
});

it('Test render font style mixin with null parameter', () => {
    const Style = styled.button`
        ${fontStyle()}
    `;
    const component = renderer.create(<Style />).toJSON();

    expect(component).toHaveStyleRule('font-style', 'normal');
});

it('Test render font stretch mixin', () => {
    const Style = styled.button`
        ${fontStretch()}
    `;
    const component = renderer.create(<Style />).toJSON();

    expect(component).toHaveStyleRule('font-stretch', 'normal');
});

it('Test render line height mixin', () => {
    const Style = styled.button`
        ${lineHeight('15px')}
    `;
    const component = renderer.create(<Style />).toJSON();

    expect(component).toHaveStyleRule('line-height', '15px');
});

it('Test render letter spacing mixin', () => {
    const Style = styled.button`
        ${letterSpacing('0.5px')}
    `;
    const component = renderer.create(<Style />).toJSON();

    expect(component).toHaveStyleRule('letter-spacing', '0.5px');
});

it('Test render letter spacing mixin with null parameter', () => {
    const Style = styled.button`
        ${letterSpacing()}
    `;
    const component = renderer.create(<Style />).toJSON();

    expect(component).toHaveStyleRule('letter-spacing', 'initial');
});

it('Test render text align mixin', () => {
    const Style = styled.button`
        ${textAlign('right')}
    `;
    const component = renderer.create(<Style />).toJSON();

    expect(component).toHaveStyleRule('text-align', 'right');
});

it('Test render text align mixin with null parameter', () => {
    const Style = styled.button`
        ${textAlign()}
    `;
    const component = renderer.create(<Style />).toJSON();

    expect(component).toHaveStyleRule('text-align', 'initial');
});

it('Test render font color mixin', () => {
    const Style = styled.button`
        ${fontColor('blue')}
    `;
    const component = renderer.create(<Style />).toJSON();

    expect(component).toHaveStyleRule('color', 'blue');
});

it('Test render font face', () => {
    const Style = styled.button`
        ${fontFace('avenir', '14px', 700, 'italic', 'expanded', '15px', '0.5px', 'center', '#000')}
    `;
    const component = renderer.create(<Style />).toJSON();

    expect(component).toHaveStyleRule('font-family', 'avenir');
    expect(component).toHaveStyleRule('font-size', '14px');
    expect(component).toHaveStyleRule('font-weight', '700');
    expect(component).toHaveStyleRule('font-style', 'italic');
    expect(component).toHaveStyleRule('font-stretch', 'expanded');
    expect(component).toHaveStyleRule('line-height', '15px');
    expect(component).toHaveStyleRule('letter-spacing', '0.5px');
    expect(component).toHaveStyleRule('text-align', 'center');
    expect(component).toHaveStyleRule('color', '#000');
});

it('Test render font face with null value', () => {
    const Style = styled.button`
        ${fontFace('avenir', '14px', 700, null, null, null, null, null, '#000')}
    `;
    const component = renderer.create(<Style />).toJSON();

    expect(component).toHaveStyleRule('font-family', 'avenir');
    expect(component).toHaveStyleRule('font-size', '14px');
    expect(component).toHaveStyleRule('font-weight', '700');
    expect(component).toHaveStyleRule('font-style', 'normal');
    expect(component).toHaveStyleRule('font-stretch', 'normal');
    expect(component).toHaveStyleRule('line-height', 'initial');
    expect(component).toHaveStyleRule('letter-spacing', 'initial');
    expect(component).toHaveStyleRule('text-align', 'initial');
    expect(component).toHaveStyleRule('color', '#000');
});
