import React, { Component } from "react";
import NavigationDesktop from '../navigation-desktop/navigation';
import NavigationMobile from '../navigation-mobile/navigation';
import { StaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";
import styles from './header.module.css';

class Header extends Component {
  constructor() {
    super();
    this.state = {
      scrolledNav: false
    }
    this.handleScroll = this.handleScroll.bind(this);
  }

  componentDidMount() {
    window.scrollTo(0, 0);
    window.addEventListener("scroll", this.handleScroll);
  }

  componentWillUnmount() {
    window.scrollTo(0, 0);
    window.removeEventListener("scroll", this.handleScroll);
  }

  handleScroll() {
    const scrollPossition = window.scrollY;
    if (scrollPossition !== 0) {
      // if state is already true don't set state again
      if (this.state.scrolledNav) return
      this.setState({
        scrolledNav: true
      })
    }
    else {
      this.setState({
        scrolledNav: false
      })
    }
  }

  render() {
    const { scrolledNav } = this.state;
    const { data } = this.props;
    const { headerUnactive, headerActive, wrapper } = styles;
    const header = scrolledNav ? headerActive : headerUnactive;
    const imageLight = data.light.childImageSharp.fixed;
    const imageDark = data.dark.childImageSharp.fixed;
    return (
      <header className={header}>
        <div className={wrapper}>
          {scrolledNav ? <Img fixed={imageDark} /> : <Img fixed={imageLight} />}
          <nav>
            <NavigationDesktop navActive={scrolledNav} />
            <NavigationMobile />
          </nav>
        </div>
      </header>
    )
  }
}

export default props => (
  <StaticQuery
    query={graphql`
        query {
          light: file(relativePath: { eq: "logo-light.png" }) {
            childImageSharp {
              fixed(width: 105) {
                ...GatsbyImageSharpFixed
              }
            }
          }
          dark: file(relativePath: { eq: "logo-dark.png" }) {
            childImageSharp {
              fixed(width: 105) {
                ...GatsbyImageSharpFixed
              }
            }
          }
        }
      `}
    render={data => <Header data={data} {...props} />}
  />
)
