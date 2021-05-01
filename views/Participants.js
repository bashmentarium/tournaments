const Participants = ({ users }) => {
  return (
    <>
      <div className="table-wrapper">
        <div className="heading">Participants List page</div>

        <div className="table-row-headings">
          <div className="nickname">Nickname</div>
          <div className="contestants">Contestants</div>
          <div className="rank">Rank</div>
        </div>
        {users.map(element => {
          return (
            <div className="table-row" key={element.nickname}>
              <div className="nickname">{element.nickname}</div>
              <div className="contestants">{element.contestants}</div>
              <div className="rank">{element.rank}</div>
            </div>
          )
        })}
      </div>
    </>
  )
}

export default Participants
