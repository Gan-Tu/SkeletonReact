// Copyright 2021 Gan TU
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

import PropTypes from "prop-types";

Button.propTypes = {
  primary: PropTypes.bool,
  href: PropTypes.string,
  newTab: PropTypes.bool,
};

Button.defaultProps = {
  primary: false,
  newTab: false,
  href: null,
};

function Button({ primary, href, newTab, children }) {
  if (href) {
    return (
      // eslint-disable-next-line
      <a
        className={primary ? "button button-primary" : "button"}
        href={href}
        target={newTab ? "_blank" : null}
        rel={newTab ? "noreferrer" : null}
      >
        {children}
      </a>
    );
  } else {
    return (
      <button className={primary ? "button-primary" : ""}>{children}</button>
    );
  }
}

export default Button;
