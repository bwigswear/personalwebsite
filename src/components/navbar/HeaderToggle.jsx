const HeaderToggle = ({setOpen}) => {
    return (
        <button onClick={() => setOpen((prev) => !prev)}>
            ToggleButton
        </button>
    );
};

export default HeaderToggle