
const ScrollToTop = () => {

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div>
        <button onClick={scrollToTop}>back to top</button>
    </div>
  )
}

export default ScrollToTop;