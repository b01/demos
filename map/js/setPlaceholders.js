function setPlaceholders(document, selectors, valueStore) {
    var elm, i, key, tpl;

    for (i = 0; i < selectors.length; i++) {
        elm = document.querySelector(selectors[i]);
        tpl = elm.innerText;

        for (key in valueStore) {
            if (!valueStore.hasOwnProperty(key)) {
                continue;
            }

            tpl = tpl.replace(
                '[' + key + ']',
                valueStore[key]
            );
        }

        elm.innerText = tpl;
    }
}