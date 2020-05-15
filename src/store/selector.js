import { selector } from 'recoil';
import { list, filterListValue } from '.';

export const filterList = selector({
    key: "filterList",
    get: ({get}) => {
        const listState = get(list);
        const filterListValueState = get(filterListValue);
        
        if (filterListValueState.length) {
          return listState.filter((item) =>
            item.value.includes(filterListValueState) && item
          );
        }
        return list;

    }
})