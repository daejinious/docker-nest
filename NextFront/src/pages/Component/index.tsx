import React, { useState } from 'react';
import styled from 'styled-components';
import Button from '../../components/Atoms/Button';
import SearchInput from '../../components/Atoms/SearchInput';
import iconPlus from '../../assets/images/icon_plus.png';
import CheckBox from '../../components/Atoms/CheckBox';
import Radio from '../../components/Atoms/Radio';
import TabMenu from '../../components/Atoms/TabMenu';
import SelectBox from '../../components/Atoms/SelectBox';
import Paginate from '../../components/Atoms/Paginate';
import Modal from '../../components/Modal';

function Component() {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <Container>
      <h1 className="page-title">Components</h1>

      <article>
        <h2 className="group-title">Button</h2>

        <section>
          <h3 className="sec-title">Button Size</h3>
          <div className="button-wrap">
            <Button size="large">Button</Button>
            <Button>Button</Button>
            <Button size="small">Button</Button>
          </div>
        </section>

        <section>
          <h3 className="sec-title">Button Color</h3>
          <div className="button-wrap">
            <Button>Button</Button>
            <Button color="lightBlue">Button</Button>
            <Button color="red">Button</Button>
            <Button color="black">Button</Button>
            <Button color="darkGray">Button</Button>
            <Button color="gray">Button</Button>
            <Button color="lightGray">Button</Button>
            <Button color="lightGray2">Button</Button>
          </div>
        </section>

        <section>
          <h3 className="sec-title">Button Outline</h3>
          <div className="button-wrap">
            <Button color="white" outline="blue">
              Button
            </Button>
            <Button color="white" outline="black">
              Button
            </Button>
            <Button color="white" outline="darkGray">
              Button
            </Button>
            <Button color="white" outline="lightGray">
              Button
            </Button>
            <Button color="white" outline="lightGray2">
              Button
            </Button>
          </div>
        </section>

        <section>
          <h3 className="sec-title">Button with Icon</h3>
          <div className="button-wrap">
            <Button color="white" outline="lightGray">
              <img className="icon" src={iconPlus} alt="더하기 아이콘" />
              <span>콘텐츠 추가</span>
            </Button>
          </div>
        </section>
      </article>

      <article>
        <h2 className="group-title">Search Input</h2>

        <section>
          <SearchInput width="300px" placeholder="search" />
        </section>
      </article>

      <article>
        <h2 className="group-title">Checkbox & Radio</h2>

        <section>
          <h3 className="sec-title">Checkbox</h3>
          <div className="checkbox-wrap">
            <CheckBox
              id={1}
              checked={true}
              onChange={(id: number, isChecked: boolean) => {}}
            />
            <CheckBox
              id={2}
              checked={false}
              onChange={(id: number, isChecked: boolean) => {}}
            />
            <CheckBox
              id={3}
              checked={false}
              onChange={(id: number, isChecked: boolean) => {}}
              disabled
            />
          </div>
        </section>

        <section>
          <h3 className="sec-title">Checkbox with Label</h3>
          <div className="checkbox-wrap">
            <CheckBox
              id={1}
              checked={true}
              onChange={(id: number, isChecked: boolean) => {}}
              label="Checkbox"
            />
            <CheckBox
              id={2}
              checked={false}
              onChange={(id: number, isChecked: boolean) => {}}
              label="Checkbox"
            />
            <CheckBox
              id={3}
              checked={false}
              onChange={(id: number, isChecked: boolean) => {}}
              label="Checkbox"
              disabled
            />
          </div>
        </section>

        <section>
          <h3 className="sec-title">Radio</h3>
          <div className="radio-wrap">
            <Radio
              name="radio"
              selected={true}
              onChange={(value: string) => {}}
            />
            <Radio
              name="radio"
              selected={false}
              onChange={(value: string) => {}}
            />
            <Radio
              name="radio"
              selected={false}
              onChange={(value: string) => {}}
              disabled
            />
          </div>
        </section>

        <section>
          <h3 className="sec-title">Radio with Label</h3>
          <div className="radio-wrap">
            <Radio
              name="radio"
              selected={true}
              onChange={(value: string) => {}}
              label="Radio"
            />
            <Radio
              name="radio"
              selected={false}
              onChange={(value: string) => {}}
              label="Radio"
            />
            <Radio
              name="radio"
              selected={false}
              onChange={(value: string) => {}}
              label="Radio"
              disabled
            />
          </div>
        </section>

        <section>
          <h3 className="sec-title">Radio - Check Style</h3>
          <div className="radio-wrap">
            <Radio
              name="radio"
              type="check"
              selected={true}
              onChange={(value: string) => {}}
            />
            <Radio
              name="radio"
              type="check"
              selected={false}
              onChange={(value: string) => {}}
            />
            <Radio
              name="radio"
              type="check"
              selected={false}
              onChange={(value: string) => {}}
              disabled
            />
          </div>
        </section>

        <section>
          <h3 className="sec-title">Radio with Label - Check Style</h3>
          <div className="radio-wrap">
            <Radio
              type="check"
              name="radio"
              selected={true}
              onChange={(value: string) => {}}
              label="Radio"
            />
            <Radio
              type="check"
              name="radio"
              selected={false}
              onChange={(value: string) => {}}
              label="Radio"
            />
            <Radio
              type="check"
              name="radio"
              selected={false}
              onChange={(value: string) => {}}
              label="Radio"
              disabled
            />
          </div>
        </section>
      </article>

      <article>
        <h2 className="group-title">Tab Menu</h2>

        <section>
          <TabMenu
            selectedTab="일정"
            menus={[
              { id: 1, text: '일정', count: 1 },
              { id: 2, text: '관리' },
              { id: 3, text: '로그' },
              { id: 4, text: '스크린샷' },
            ]}
          />
        </section>
      </article>

      <article>
        <h2 className="group-title">Select Box</h2>

        <section>
          <h3 className="sec-title">Selectbox - Outline</h3>
          <div className="selectbox-wrap">
            <SelectBox
              selectedItem="셋탑 번호"
              optionList={[
                { id: 1, text: '셋탑 번호' },
                { id: 2, text: '관리' },
                { id: 3, text: '로그' },
                { id: 4, text: '스크린샷' },
              ]}
            />
            <SelectBox
              optionAlign="right"
              selectedItem="셋탑 번호"
              optionList={[
                { id: 1, text: '셋탑 번호' },
                { id: 2, text: '관리' },
                { id: 3, text: '로그' },
                { id: 4, text: '스크린샷' },
              ]}
            />
          </div>
        </section>

        <section>
          <h3 className="sec-title">Selectbox - No Outline</h3>
          <div className="selectbox-wrap">
            <SelectBox
              outline={false}
              selectedItem="셋탑 번호"
              optionList={[
                { id: 1, text: '셋탑 번호' },
                { id: 2, text: '관리' },
                { id: 3, text: '로그' },
                { id: 4, text: '스크린샷' },
              ]}
            />
            <SelectBox
              outline={false}
              optionAlign="right"
              selectedItem="셋탑 번호"
              optionList={[
                { id: 1, text: '셋탑 번호' },
                { id: 2, text: '관리' },
                { id: 3, text: '로그' },
                { id: 4, text: '스크린샷' },
              ]}
            />
          </div>
        </section>
      </article>

      <article>
        <h2 className="group-title">Painate</h2>

        <section>
          <h3 className="sec-title">Painate Basic</h3>
          <Paginate></Paginate>
        </section>
      </article>

      <article>
        <h2 className="group-title">Modal</h2>

        <section>
          <h3 className="sec-title">Confirm Modal</h3>
          <Button onClick={() => setModalVisible(true)}>Modal</Button>

          <Modal
            visible={modalVisible}
            title="콘텐츠 파일 업로드"
            subTitle="아래와 같이 파일을 업로드 하시겠습니까?"
            onClickCancelBtn={() => setModalVisible(false)}
            onClickConfirmBtn={() => setModalVisible(false)}
          >
            <ul className="modal-sample-content">
              <li>부산 엑스포 홍보영상.MP4</li>
              <li>블랙 홀릭 해피TV.MP4</li>
              <li>코리아 그랜드 세일.AVI</li>
            </ul>
          </Modal>
        </section>
      </article>
    </Container>
  );
}

const Container = styled.div`
  padding: 20px;

  .page-title {
    font-weight: 600;
    font-size: 3rem;
    margin-bottom: 40px;
  }

  .group-title {
    font-size: 2rem;
    font-weight: 500;
    padding: 8px 12px;
    background-color: #f5f5f5;
    border: 1px solid #ccc;
    border-radius: 4px;
    margin-bottom: 30px;
  }

  section {
    margin-bottom: 30px;

    .sec-title {
      font-size: 1.6rem;
      margin-bottom: 10px;
      font-weight: 500;
    }

    .button-wrap {
      display: flex;

      button {
        margin-right: 8px;
      }
    }

    .checkbox-wrap,
    .radio-wrap {
      display: flex;

      & > label {
        margin-right: 15px;
      }
    }

    .selectbox-wrap {
      display: flex;

      & > div {
        margin-right: 50px;
      }
    }
  }

  .modal-sample-content {
    li {
      font-size: 1.4rem;
      line-height: 2;
      color: ${({ theme }) => theme.palette.darkGray};
      padding-left: 18px;
      position: relative;

      &:after {
        content: '';
        display: block;
        width: 2px;
        height: 2px;
        border-radius: 2px;
        background-color: ${({ theme }) => theme.palette.darkGray};
        position: absolute;
        top: 50%;
        left: 6px;
      }
    }
  }
`;

export default Component;
