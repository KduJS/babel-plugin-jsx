import {
  h, reactive, createApp,
} from 'kdu';
import { KduJSXPluginOptions } from '../../babel-plugin-jsx/src';

export { KduJSXPluginOptions };

export const compilerOptions: KduJSXPluginOptions = reactive({
  mergeProps: true,
  optimize: false,
  transformOn: false,
  enableObjectSlots: true,
});

const App = {
  setup() {
    return () => [
      h('h1', 'Kdu 3 JSX Explorer'),

      h('div', { id: 'options-wrapper' }, [
        h('div', { id: 'options-label' }, 'Options ↘'),
        h('ul', { id: 'options' }, [

          // mergeProps
          h('li', [
            h('input', {
              type: 'checkbox',
              id: 'mergeProps',
              name: 'mergeProps',
              checked: compilerOptions.mergeProps,
              onChange(e: Event) {
                compilerOptions.mergeProps = (e.target as HTMLInputElement).checked;
              },
            }),
            h('label', { for: 'mergeProps' }, 'mergeProps'),
          ]),

          // optimize
          h('li', [
            h('input', {
              type: 'checkbox',
              id: 'optimize',
              checked: compilerOptions.optimize,
              onChange(e: Event) {
                compilerOptions.optimize = (e.target as HTMLInputElement).checked;
              },
            }),
            h('label', { for: 'optimize' }, 'optimize'),
          ]),

          // transformOn
          h('li', [
            h('input', {
              type: 'checkbox',
              id: 'transformOn',
              checked: compilerOptions.transformOn,
              onChange(e: Event) {
                compilerOptions.transformOn = (e.target as HTMLInputElement).checked;
              },
            }),
            h('label', { for: 'transformOn' }, 'transformOn'),
          ]),

          // enableObjectSlots
          h('li', [
            h('input', {
              type: 'checkbox',
              id: 'transformOn',
              checked: compilerOptions.enableObjectSlots,
              onChange(e: Event) {
                compilerOptions.enableObjectSlots = (e.target as HTMLInputElement).checked;
              },
            }),
            h('label', { for: 'enableObjectSlots' }, 'enableObjectSlots'),
          ]),
        ]),
      ]),
    ];
  },
};

export function initOptions() {
  createApp(App).mount(document.getElementById('header')!);
}
