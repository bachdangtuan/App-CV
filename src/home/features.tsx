import type { NextPage } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import styled from 'styled-components';

const FeatureContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  align-items: flex-start;
  font-size: 1rem;
  text-align: center;
  row-gap: 50px;

  h2 {
    color: #6c63ff;
    text-align: center;
    margin: 10px 0;
  }

  p {
    font-size: 0.8em;
    color: #2d2d2d;
  }

  & > div {
    flex: 1 1 0;
  }

  @media (min-width: 768px) {
    flex-direction: row;
    column-gap: 50px;
    margin-top: 50px;
  }
`;

const Features: NextPage = () => {
  return (
    <FeatureContainer>
      <div>
        <Image src="/home/no-account.png" alt="No account" height="50px" width="50px" />
        <h2>Cây nhà lá vườn</h2>
        <p>
          Tạo ở đây cho nhanh, hàng cây nhà là vườn, không lưu lại thông tin cá nhân của anh em đâu
        </p>
      </div>
      <div>
        <Image src="/home/timer.png" alt="No account" height="50px" width="50px" />

        <h2>Làm CV ở đây nó tiện</h2>
        <p>
            Với trình chỉnh sửa mạnh mẽ và nhiều mẫu sẵn sàng cho công việc/chuyên nghiệp, bạn có thể xây dựng sơ yếu lý lịch của mình chỉ trong vài cú nhấp chuột và nhấn phím.
        </p>
      </div>
      <div>
        <Image src="/home/resume.png" alt="No account" height="50px" width="50px" />
        <h2>Miễn phí</h2>
        <p>
            Chẳng mất đồng nào mà vẫn có cái CV riêng biệt không trùng với bên nào
        </p>
      </div>
    </FeatureContainer>
  );
};

export default Features;
