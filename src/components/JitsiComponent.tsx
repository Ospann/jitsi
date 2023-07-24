import { JitsiMeeting } from "@jitsi/react-sdk";

const JitsiComponent = ({ roomName }: { roomName: string }) => {
    return (
        <JitsiMeeting
            domain="meet.jit.si"
            roomName={roomName}
            configOverwrite={{
                startWithAudioMuted: true,
                disableModeratorIndicator: true,
                startScreenSharing: true,
                enableEmailInStats: false
            }}
            interfaceConfigOverwrite={{
                DISABLE_JOIN_LEAVE_NOTIFICATIONS: true
            }}
            getIFrameRef={(iframeRef) => { iframeRef.style.height = '400px'; }}
        />
    );
};

export default JitsiComponent;
