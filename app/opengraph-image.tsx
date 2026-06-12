import { ImageResponse } from 'next/og';

export const alt = 'Vessel | T.Buckets — 12 years of enterprise IT applied to modern DevOps';
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = 'image/png';

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: '80px',
          background: '#030712', // gray-950
          color: '#ffffff',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
          <div
            style={{
              width: '64px',
              height: '64px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              background: '#3b82f6', // blue-500
              color: '#030712',
              borderRadius: '12px',
              fontSize: '40px',
              fontWeight: 800,
            }}
          >
            V
          </div>
          <div style={{ fontSize: '40px', fontWeight: 700 }}>Vessel</div>
        </div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            marginTop: '56px',
            fontSize: '64px',
            fontWeight: 700,
            lineHeight: 1.15,
            letterSpacing: '-0.02em',
            maxWidth: '900px',
          }}
        >
          <span>12 years of enterprise IT,</span>
          <span style={{ color: '#3b82f6' }}>applied to modern DevOps.</span>
        </div>
        <div style={{ marginTop: '32px', fontSize: '28px', color: '#9ca3af' }}>
          Infrastructure · Automation · Reliability — tbuckets.us
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
