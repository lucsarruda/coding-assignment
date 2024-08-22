import React, { useEffect } from 'react';

const withInfiniteScroll = (WrappedComponent) => {
  return function InfiniteScrollComponent(props) {
    const { loadMoreMovies } = props;

    useEffect(() => {
      const handleScroll = () => {
        if (window.innerHeight + document.documentElement.scrollTop >= document.documentElement.offsetHeight - 10) {
          loadMoreMovies();
        }
      };

      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }, [loadMoreMovies]);

    return <WrappedComponent {...props} />;
  };
};

export default withInfiniteScroll;