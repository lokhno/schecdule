class paramProperty {
    constructor(
        displayName,
        internalName,
        browsable = false,
        editable = false
    ) {
        this.displayName = displayName;
        this.internalName = internalName;
        this.editable = editable;
        this.browsable = browsable;
    }
}



const ID_PARAM = new paramProperty("ID", "id");

const FULL_NAME= new paramProperty("Full name", "fullname", true, true);

const GROUP = new paramProperty("Group", "group", true, true);

const TITLE = new paramProperty('Title', 'title', true, true);

const QUANTITY = new paramProperty('Quantity', 'quantity', true);


export let studentStructure = [ID_PARAM, FULL_NAME, GROUP];
export let groupStructure = [ID_PARAM, TITLE, QUANTITY];
