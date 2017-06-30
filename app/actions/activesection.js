

export const SECTIONSELECTED = "SECTION_SELECTED";

export function activeTab (activeTab) {
    console.log("ACTION OF SELECTED TAB: " + activeTab);
    return {
        "type": SECTIONSELECTED,
        "payload": activeTab
    };
}