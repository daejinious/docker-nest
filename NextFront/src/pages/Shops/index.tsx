import React from 'react';
import styled from 'styled-components';
import Button from '../../components/Atoms/Button';

function Shops() {
  return (
    <Container>
      <div className="page-inner">
        <section>
          <div className="section-top">
            <div className="section-top-left">
              <h2 className="section-title">매장정보</h2>
              <span className="section-count">264</span>
            </div>
            <div className="section-top-right">
              <Button color="white" outline="darkGray" width="80px">
                샘플 버튼
              </Button>
            </div>
          </div>
        </section>
      </div>
    </Container>
  );
}

const Container = styled.article``;

export default Shops;
