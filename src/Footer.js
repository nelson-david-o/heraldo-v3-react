import React, { Component } from "react";

class Footer extends Component {
  render() {
    return (
      <fragment>
        <div class="conainer-fluid">
          <div class="jumbotron jumbotron-fluid" id="jumbotron">
            <div class="container">
              <h1 class="display-4 text-center">El Heraldo</h1>

              <hr />

              <div class="text-center center-block">
                Sitio Web:{" "}
                <a href="https://www.elheraldo.co/">
                  https://www.elheraldo.co/
                </a>
                <br />
                PBX: (57) (5) 3715000 Línea de atención: (57) (5) 313-3400 /
                300-910-9968 Calle 53B N° 46 - 25, Barranquilla - Atlántico
                Oficina Bogotá: Dirección Calle 88 No. 13 A 07 Teléfono: (1) 218
                5733
                <br />
              </div>
            </div>
          </div>
        </div>
      </fragment>
    );
  }
}

export default Footer;
