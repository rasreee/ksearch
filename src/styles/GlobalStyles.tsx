import { css, Global } from '@emotion/react'

export const GlobalStyles = () => {
  return (
    <Global
      styles={css`
        * {
          transition-property: background-color, border-color, color, fill, stroke, opacity,
            box-shadow, transform, filter, backdrop-filter;
          transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
          transition-duration: 150ms;
        }

        html,
        body {
          font-size: 16px;
          line-height: 150%;
          margin: 0;
          padding: 0;
          min-height: 100%;
          scroll-behavior: smooth;
          transition-property: all;
          transition-duration: 150ms;
          transition-timing-function: cubic-bezier(0.4, 0, 1, 1);
        }

        body {
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu',
            'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
        }

        kbd {
          font-family: sans-serif;
        }

        li {
          list-style-type: none;
        }

        /* clears the ‘X’ from Internet Explorer */
        input[type='search']::-ms-clear {
          display: none;
          width: 0;
          height: 0;
        }

        input[type='search']::-ms-reveal {
          display: none;
          width: 0;
          height: 0;
        }

        /* clears the ‘X’ from Chrome */
        input[type='search']::-webkit-search-decoration,
        input[type='search']::-webkit-search-cancel-button,
        input[type='search']::-webkit-search-results-button,
        input[type='search']::-webkit-search-results-decoration {
          display: none;
        }

        ::-webkit-scrollbar {
          width: 0.5rem;
          background-color: transparent;
        }

        ::-webkit-scrollbar-track {
          background: transparent;
        }
      `}
    />
  )
}
