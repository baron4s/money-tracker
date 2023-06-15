import { LitElement } from "lit";

class WithOutShadowDom extends LitElement {
    createRenderRoot() {
        return this;
    }
}

export default WithOutShadowDom