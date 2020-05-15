import { atom } from 'recoil';

export const list = atom({
    key: "list",
    default: []
});

export const filterListValue = atom({
    key: "filterListValue",
    default: "" //values: all or filter
});