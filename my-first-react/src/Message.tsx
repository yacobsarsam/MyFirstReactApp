function Message() {
    const name = "Yacoub";
    if (name)
        return <h1>Hello {name}</h1>
    return <h1>Hello word</h1>
}

export default Message;