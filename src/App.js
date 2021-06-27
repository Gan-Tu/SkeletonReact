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

import "./assets/css/normalize.css";
import "./assets/css/skeleton.css";
import "./App.css";
import Table from "./components/Table";
import Button from "./components/Button";
import Row from "./components/layout/Row";
import Container from "./components/layout/Container";
import Column from "./components/layout/Column";

function App() {
  return (
    <div className="App">
      <Container>
        <Row>
          <Column columns="ten">
            <h4>Basic Page</h4>
            <p>
              This index.html page is a placeholder with the CSS, font and
              favicon. It's just waiting for you to add some content! If you
              need some help hit up the{" "}
              <a href="http://www.getskeleton.com">Skeleton documentation</a>
            </p>
            <Table
              // fullWidth
              headers={["Name", "Age", "Sex", "Location"]}
              rows={[
                ["Dave Gamache", "26", "Male", "San Francisco"],
                ["Dwayne Johnson", 42, "Male", "Hayward"],
              ]}
            />
            <form>
              <div className="row">
                <div className="six columns">
                  <label htmlFor="exampleEmailInput">Your email</label>
                  <input
                    className="u-full-width"
                    type="email"
                    placeholder="test@mailbox.com"
                    id="exampleEmailInput"
                  />
                </div>
                <div className="six columns">
                  <label htmlFor="exampleRecipientInput">
                    Reason for contacting
                  </label>
                  <select className="u-full-width" id="exampleRecipientInput">
                    <option value="Option 1">Questions</option>
                    <option value="Option 2">Admiration</option>
                    <option value="Option 3">Can I get your number?</option>
                  </select>
                </div>
              </div>
              <label htmlFor="exampleMessage">Message</label>
              <textarea
                className="u-full-width"
                placeholder="Hi Dave …"
                id="exampleMessage"
              ></textarea>
              <label className="example-send-yourself-copy">
                <input type="checkbox" />
                <span className="label-body">Send a copy to yourself</span>
              </label>
              <input className="button-primary" type="submit" value="Submit" />
            </form>
            <Button>Hello World</Button>
            <Button primary newTab href="http://getskeleton.com">
              Get Skeleton
            </Button>
          </Column>
        </Row>
      </Container>
    </div>
  );
}

export default App;
