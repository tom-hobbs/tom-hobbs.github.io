async function loadBibliography() {
  const bib = document.querySelector('#bibliography[data-bib-src]');

  const html = await (await fetch(bib.dataset.bibSrc)).text();

  const tmp = document.createElement('template');
  tmp.innerHTML = html.trim();
  bib.append(...tmp.content.childNodes);
}

document.addEventListener('DOMContentLoaded', loadBibliography);


// function orderBibliography(){
//   const refs = [...document.querySelectorAll('a.ref[data-ref]')]; //collect in-text citations in order of appearance
//   //<a class="ref" data-ref="brooks1999"></a>

//   const bib = document.querySelector('#bibliography');
//   const items = new Map([...bib.querySelectorAll('li[data-ref]')].map(li => [li.dataset.ref, li]));

//   //remove duplicate refs
//   const order = [];
//   const seen = new Set();
//   for (const c of cites) {
//     const key = c.dataset.cite;
//     if (!seen.has(key)) { seen.add(key); order.push(key); }
//   }



// }