import WebInput from './web';
import MobileInput from './mobile';

export default process.env.NODE_ENV == 'mobile'
    ? MobileInput
    : WebInput;
