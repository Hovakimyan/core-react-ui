import WebInput from './web';
import MobileInput from './mobile';

// const Input = process.env.MODE === 'mobile' ? import('./mobile') : import('./web');

export default process.env.NODE_ENV == 'mobile'
    ? MobileInput
    : WebInput;

console.log(process.env.NODE_ENV);
