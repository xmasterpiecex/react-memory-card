export default function Game({ data, shuf }: any) {
  return (
    <>
      {data.map((item: any) => {
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
