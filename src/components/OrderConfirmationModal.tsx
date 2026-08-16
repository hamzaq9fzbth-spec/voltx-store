import React from 'react';
import { 
  CheckCircle, 
  Package, 
  Truck, 
  Download, 
  ExternalLink, 
  X, 
  Zap, 
  MapPin,
  Calendar
} from 'lucide-react';
import { useStore } from '../context/StoreContext';

export const OrderConfirmationModal: React.FC = () => {
  const { 
    activeOrderForConfirmation, 
    setActiveOrderForConfirmation,
    formatPrice,
    setIsOrderTrackingOpen,
    setTrackingOrderId,
    showToast
  } = useStore();

  if (!activeOrderForConfirmation) return null;

  const order = activeOrderForConfirmation;

  const handleTrackOrder = () => {
    setTrackingOrderId(order.id);
    setActiveOrderForConfirmation(null);
    setIsOrderTrackingOpen(true);
  };

  const handleDownloadInvoice = () => {
    window.print();
    showToast(`Invoice for Order #${order.id} downloaded successfully!`, 'success');
  };

  return (
    <div className="modal-backdrop" onClick={() => setActiveOrderForConfirmation(null)}>
      <div 
        className="modal-container" 
        onClick={(e) => e.stopPropagation()}
        style={{ maxWidth: '780px', padding: '2.5rem 2rem' }}
      >
        <button 
          onClick={() => setActiveOrderForConfirmation(null)}
          className="btn-icon"
          style={{ position: 'absolute', top: '1.25rem', right: '1.25rem' }}
        >
          <X size={18} />
        </button>

        {/* Celebration Header */}
        <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
          <div style={{
            width: '64px',
            height: '64px',
            borderRadius: '50%',
            background: 'rgba(16, 185, 129, 0.15)',
            border: '2px solid var(--accent-emerald)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            margin: '0 auto 1rem',
            color: 'var(--accent-emerald)',
            boxShadow: '0 0 25px rgba(16, 185, 129, 0.3)'
          }}>
            <CheckCircle size={36} />
          </div>

          <h2 style={{ fontSize: '1.8rem', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '0.4rem' }}>
            Order Confirmed & Authorized!
          </h2>
          <p style={{ fontSize: '0.92rem', color: 'var(--text-secondary)' }}>
            Thank you, <strong style={{ color: 'var(--text-primary)' }}>{order.customer.fullName}</strong>. We have received your order and our automated warehouse is preparing your hardware.
          </p>
        </div>

        {/* Order Meta Quick Bar */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
          gap: '1rem',
          background: 'var(--bg-elevated)',
          borderRadius: 'var(--radius-lg)',
          padding: '1.25rem',
          border: '1px solid var(--border-subtle)',
          marginBottom: '2rem'
        }}>
          <div>
            <div style={{ fontSize: '0.72rem', fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase' }}>Order Number</div>
            <div style={{ fontSize: '1.1rem', fontWeight: 800, color: 'var(--accent-cyan)', fontFamily: 'var(--font-mono)' }}>
              #{order.id}
            </div>
          </div>

          <div>
            <div style={{ fontSize: '0.72rem', fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase' }}>Tracking ID</div>
            <div style={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--text-primary)', fontFamily: 'var(--font-mono)' }}>
              {order.trackingNumber}
            </div>
          </div>

          <div>
            <div style={{ fontSize: '0.72rem', fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase' }}>Est. Delivery</div>
            <div style={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--accent-emerald)' }}>
              {order.estimatedDelivery}
            </div>
          </div>

          <div>
            <div style={{ fontSize: '0.72rem', fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase' }}>Total Paid</div>
            <div style={{ fontSize: '1.1rem', fontWeight: 800, color: 'var(--text-primary)', fontFamily: 'var(--font-mono)' }}>
              {formatPrice(order.total)}
            </div>
          </div>
        </div>

        {/* 4-Stage Tracking Progress Timeline */}
        <div style={{ marginBottom: '2rem' }}>
          <h4 style={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '1rem' }}>
            Live Fulfillment Pipeline
          </h4>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '0.5rem', position: 'relative' }}>
            {[
              { label: 'Order Placed', status: 'done' },
              { label: 'Payment Verified', status: 'done' },
              { label: 'Hardware Packaged', status: 'active' },
              { label: 'Courier Transit', status: 'pending' }
            ].map((step, idx) => (
              <div key={idx} style={{ textAlign: 'center' }}>
                <div style={{
                  width: '28px',
                  height: '28px',
                  borderRadius: '50%',
                  background: step.status === 'done' 
                    ? 'var(--accent-emerald)' 
                    : step.status === 'active' 
                    ? 'var(--accent-cyan)' 
                    : 'var(--bg-elevated)',
                  color: step.status === 'pending' ? 'var(--text-muted)' : '#090d16',
                  fontSize: '0.75rem',
                  fontWeight: 800,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 0.5rem'
                }}>
                  {step.status === 'done' ? '✓' : idx + 1}
                </div>
                <div style={{ fontSize: '0.75rem', fontWeight: 700, color: step.status === 'pending' ? 'var(--text-muted)' : 'var(--text-primary)' }}>
                  {step.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Purchased Items List */}
        <div style={{
          background: 'var(--bg-elevated)',
          borderRadius: 'var(--radius-lg)',
          padding: '1.25rem',
          marginBottom: '2rem'
        }}>
          <h4 style={{ fontSize: '0.9rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '0.75rem' }}>
            Package Contents ({order.items.length} items)
          </h4>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            {order.items.map(item => (
              <div key={item.id} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <img src={item.product.images[0]} alt={item.product.title} style={{ width: '44px', height: '44px', borderRadius: '6px', objectFit: 'cover' }} />
                  <div>
                    <div style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--text-primary)' }}>
                      {item.product.title}
                    </div>
                    <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)' }}>
                      Quantity: {item.quantity} {item.selectedSpec ? `• ${item.selectedSpec}` : ''} {item.selectedLength ? `• ${item.selectedLength}` : ''}
                    </div>
                  </div>
                </div>

                <div style={{ fontSize: '0.9rem', fontWeight: 800, color: 'var(--accent-cyan)', fontFamily: 'var(--font-mono)' }}>
                  {formatPrice(item.unitPrice * item.quantity)}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Actions Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '0.75rem' }}>
          <button 
            onClick={handleTrackOrder}
            className="btn btn-primary"
            style={{ padding: '0.8rem' }}
          >
            <Truck size={16} />
            <span>Track Order Status</span>
          </button>

          <button 
            onClick={handleDownloadInvoice}
            className="btn btn-secondary"
            style={{ padding: '0.8rem' }}
          >
            <Download size={16} />
            <span>Print Invoice PDF</span>
          </button>

          <button 
            onClick={() => setActiveOrderForConfirmation(null)}
            className="btn btn-outline"
            style={{ padding: '0.8rem' }}
          >
            <span>Back to Store</span>
          </button>
        </div>
      </div>
    </div>
  );
};
