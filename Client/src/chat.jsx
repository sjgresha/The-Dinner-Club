export default function Chat() {
    return (
        <div className="flex h-screen">
            <div className="bg-green-100 w-1/3">Profiles</div>
            <div className="bg-green-300 w-2/3">
                <div>messages with selected profile</div>
                <div>
                    <input type="Say something" className="bg-grey border p-1"/>
                </div>
            </div>
        </div>
    );
}
