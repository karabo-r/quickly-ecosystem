import {atom} from 'recoil'

export const NoteItem = atom({
    key: 'NoteItem',
    default: [{
        heading: "heading passed",
        text: "text passed"
    }]
})