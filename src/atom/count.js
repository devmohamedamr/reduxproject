import {atom} from 'recoil';

const count = atom({
    key: 'count', // unique ID (with respect to other atoms/selectors)
    default: 1, // default value (aka initial value)
});

export default count;