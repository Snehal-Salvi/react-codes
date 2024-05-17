useEffect(() => {
  // Cleanup function to be executed just before the component unmounts
  return () => {
    // Runs just before the component is unmounted
  };
}, []); // Empty dependency array means it only runs once after mount, hence it acts like componentWillUnmount
