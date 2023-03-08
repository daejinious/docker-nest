import React from 'react';
import styled from 'styled-components';
import Button from '../../components/Atoms/Button';

function Main() {
  return (
    <Container>
      <div className="page-inner">
        <section>
          <div className="section-top">
            <div className="section-top-left">
              <h2 className="section-title">기본정보</h2>
              <span className="section-count">264</span>
            </div>
            <div className="section-top-right">
              <Button color="white" outline="darkGray" width="80px">
                샘플 버튼
              </Button>
            </div>
          </div>

          {/* sample-content는 삭제하고 작업 고고 */}
          <div className="sample-content">sample contents</div>
        </section>
      </div>
    </Container>
  );
}

const Container = styled.article`
  .sample-content {
    height: 200px;
    background-color: #f5f5f5;
    font-size: 1.4rem;
    padding: 15px;
  }
`;

export default Main;
