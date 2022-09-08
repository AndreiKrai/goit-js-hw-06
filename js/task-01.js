const listRef = document.querySelector('#categories').children;
console.log(`Number of categories: ${listRef.length}`);

[...listRef].forEach(item => {
  const title = item.querySelector('h2').textContent;
  const innerListRef = item.querySelectorAll('li').length;
  console.log(`Category: ${title}`);
  console.log(`Elements: ${innerListRef}`);
});
