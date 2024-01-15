export default function Game({ data, shuf }) {
  return (
    <>
      {data.map(item => {
        return (
          <img
            onClick={() => {
              shuf(item.id);
            }}
            key={item.id}
            src={item.sprites.other.dream_world.front_default}
            className='card'
          />
        );
      })}
    </>
  );
}
