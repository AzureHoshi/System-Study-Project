import React from 'react';
import { Helmet } from 'react-helmet';
import brand from 'dan-api/dummy/brand';
import { PapperBlock } from 'dan-components';

function StudentFeedback() {
  const title = brand.name + ' - Blank Page';
  const description = brand.desc;
  return (
    <div>
      <Helmet>
        <title>{title}</title>
        <meta
          name='description'
          content={description}
        />
        <meta
          property='og:title'
          content={title}
        />
        <meta
          property='og:description'
          content={description}
        />
        <meta
          property='twitter:title'
          content={title}
        />
        <meta
          property='twitter:description'
          content={description}
        />
      </Helmet>
      <PapperBlock
        title='แบบประเมินความพึงพอใจที่มีต่อเว็บไซค์'
        desc='เลือกคะแนนที่ตรงกับความพึงพอใจมากที่สุด'
      >
        Content
      </PapperBlock>
    </div>
  );
}

export default StudentFeedback;
