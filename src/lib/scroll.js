export const scrollFullPage = () => {
  let pageHeight = window.innerHeight;
  window.scroll({
    top: pageHeight,
    left: 0,
    behavior: "smooth",
  });
};