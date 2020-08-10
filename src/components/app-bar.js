class AppBar extends HTMLElement {
    connectedCallback(){
        this.render();
    }
  
    render() {
       this.innerHTML = `
       <h4>Film Insight</h4>
       `;
    }
}

customElements.define("app-bar", AppBar);