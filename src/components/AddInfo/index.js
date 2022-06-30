import Styles from "./style";

import { Container } from "@material-ui/core";

export const AddInfo = () => {
  return (
    <Styles>
        <div>
            <div className="div-content">
                <div className="Add-Info-overlay"></div>
                <Container>
                    <h3 className="text-part3">Курсы которые вы искали</h3>
                </Container>
            </div>
        </div>
    </Styles>
  );
};

export default AddInfo;
