const html = String.raw;

class Page {
  data() {
    return {
      layout: 'base',
      title: 'Ryan Cao',
      permalink: '/',
    };
  }

  render() {
    return html`<p>My name is <mark>Ryan</mark>.</p>`;
  }
}

module.exports = Page;
