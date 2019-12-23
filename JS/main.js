import './style.scss';
import 'bootstrap';
import NumEdit from './NumEdit.svelte';

const numEdits = new Map();
window.numEdit = {
    init: (id, idTag, idOk, idEscape, left, right) => {
        const target = document.getElementById(id);
        numEdits.set(id, new NumEdit({
            target,
            props: {
                idTag,
                idOk,
                idEscape,
                left,
                right
            }
        }));
    },
    clear: (id) => {
        numEdits.get(id).$destroy();
    }
}
