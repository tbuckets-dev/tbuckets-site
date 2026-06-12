import { ImageResponse } from 'next/og';

// Image metadata
export const size = {
  width: 32,
  height: 32,
};
export const contentType = 'image/png';

// Image generation
export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 24,
          background: '#0B0F0E', // --bg graphite
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#34D399', // --primary emerald
          borderRadius: '4px',
          fontWeight: 800,
        }}
      >
        V
      </div>
    ),
    {
      ...size,
    }
  );
}
