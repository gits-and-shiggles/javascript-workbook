'use strict';

document.addEventListener('DOMContentLoaded', () => {
  // Your code here
  let moved = {size: null, item: null};

  document.querySelectorAll('[data-block]').forEach((block) => {
    block.addEventListener('click', (e) => {
      e.stopPropagation();
      const parent = e.target.parentNode;

      if (moved.item !== null){
        return;
      }
      else {
        moved.size = parent.children[parent.children.length - 1].attributes[0].value;
        moved.item = parent.children[parent.children.length - 1];
        parent.removeChild(moved.item);
      }
    });
  });
  document.querySelectorAll('[data-stack]').forEach((stack) => {
    stack.addEventListener('click', (e) => {
      if (!e.target.children.length) {
        e.target.appendChild(moved.item);
        moved.item = null;
      }
      else if (moved.size < e.target.children[e.target.children.length - 1].attributes[0].value) {
        e.target.appendChild(moved.item);
        moved.item = null;
      }
    });
  });
});
