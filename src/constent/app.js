import TrigonometricBtn from '../containers/TrigonometricBtn';
import WaveAnimation from '../containers/WaveAnimation';
import WaveLines from '../containers/WaveLines';
export const MENUS = [
  {
    name: '三角函数按钮动画',
    path: 'trigonometric-function-btn-animation',
    component: TrigonometricBtn,
  },
  {
    name: '波浪动画',
    path: 'wave-animation',
    component: WaveAnimation
  },
  {
    name: '波浪线条',
    path: 'wave-lines',
    component: WaveLines
  }
];