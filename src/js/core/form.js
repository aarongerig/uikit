import {addClass, attr, hasAttr, hasClass, removeClass} from 'uikit-util';

export default {
    data: {
        clsValidated: 'uk-form-validated',
    },

    connected() {
        if (!hasAttr(this.$el, 'novalidate')) {
            attr(this.$el, 'novalidate', 'novalidate');
        }
    },

    events: {

        submit(e) {
            if (this.$el.checkValidity() === false) {
                e.preventDefault();
                e.stopPropagation();
            }

            if (!hasClass(this.$el, this.clsValidated)) {
                addClass(this.$el, this.clsValidated);
            }
        },

        reset() {
            if (hasClass(this.$el, this.clsValidated)) {
                removeClass(this.$el, this.clsValidated);
            }
        },

    },
};
