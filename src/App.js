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
            <Button primary newTab href="http://getskeleton.com">
              Hello World
            </Button>
          </Column>
        </Row>
      </Container>
    </div>
  );
}

export default App;
