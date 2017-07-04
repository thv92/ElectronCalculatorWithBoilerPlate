
export const ITEMSELECTED = "ITEM_SELECTED";


export function itemClicked(sectionName, itemName) {
    return {
        "type": ITEMSELECTED,
        "payload": {sectionName, itemName}
    };
}