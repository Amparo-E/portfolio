export const gridItems = document.querySelectorAll('.grid-item');

gridItems.forEach((item:any) => {
  item.style.setProperty('--rand-order', Math.random() );
  item.style.setProperty('--rand-size', Math.random());
});