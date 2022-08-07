import DiaryItem from "./DiaryItem";

const DiaryList = ({ diaryList }) => {
  console.log(diaryList);
  return (
    <div className="DiaryList">
      <h2>일기 리스트</h2>
      <h4>{diaryList.length}개의 일기가 있습니다</h4>
      <div>
        {diaryList.map((it, idx) => (
          <DiaryItem key={it.id} {...it} />
        ))}
      </div>
    </div>
  );
};

//undefined로 전달되는 에러 방지
DiaryList.defautProps = {
  diaryList: [],
};

export default DiaryList;
