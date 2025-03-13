import { Input } from "../components/ui/InputBox"
import { Button } from "../components/ui/Button"

export function Signin() {
    return <div className="h-screen w-screen bg-gray-200 flex items-center justify-center">
        <div className=" bg-white border border-purple-300 p-6 rounded-2xl min-w-48">
            <div>
                <Input placeholder="Username" />
                <Input placeholder="Password" />
            </div>
            <div className="flex justify-center mt-2">
                <Button size="md" fullWidth = {true} variant="primary" text="Signin" loading={true} />
            </div>
        </div>
    </div>
}