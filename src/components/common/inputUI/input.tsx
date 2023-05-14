

export function InputUI() {

  return (
    <form className="send">
      <div className="send__wrapper">
        <input type="email" className="send__email" placeholder='Email Address' />
        <button className="send__btn" type="submit">Submit</button>
      </div>
    </form>
  );
}